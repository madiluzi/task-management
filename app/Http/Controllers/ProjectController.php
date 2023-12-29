<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Models\Module;
use App\Models\Page;
use App\Models\Project;
use App\Models\Status;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Projects/Index', [
            'projects' => new ProjectCollection(Project::latest()->paginate(10)),
            // 'projects' => Project::latest()->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
        ]);

        $request->user()->projects()->create($validated);

        // $project = new Project;
        // $project->title = $request->title;
        // $project->save();

        return redirect()->route('projects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $status = Status::all();
        $allTasksPerStatus = [];
        foreach ($status as $key => $value) {
            $taskPerStatus = Task::where('status_id', $value->id)->get();
            $allTasksPerStatus[$value->id] = $taskPerStatus;
        }

        return Inertia::render('Projects/Detail', [
            'project' => $project,
            'tasks' => Task::all(),
            'modules' => Module::all(),
            'pages' => Page::all(),
            'status' => Status::all(),
            'tasksPerStatus' => $allTasksPerStatus
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required',
        ]);

        $project->update($validated);

        return redirect()->route('projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('projects.index');
    }
}