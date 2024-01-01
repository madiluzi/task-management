<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Models\Module;
use App\Models\Page;
use App\Models\Priority;
use App\Models\Project;
use App\Models\Status;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Projects/Index', [
            'projects' => new ProjectCollection(Project::latest()->with('status', 'modules', 'tasks')->paginate(10)),
            'statuses' => Status::all(),
            'priorities' => Priority::all(),
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
            'status_id' => 'nullable',
            'priority_id' => 'nullable',
        ]);

        $validated['slug'] = Str::slug($validated['title']);
        // dd($validated);
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
        // $status = Status::all();
        // $allTasksPerStatus = [];
        // foreach ($status as $key => $value) {
        //     $taskPerStatus = Task::where('status_id', $value->id)->get();
        //     $allTasksPerStatus[$value->id] = $taskPerStatus;
        // }
        $statuses = Status::all();

        // Transform the data to a format suitable for React
        $allTasksPerStatus = Status::with(['tasks' => function ($query) use ($project) {
            $query->where('project_id', $project->id);
        }])->get()->map(function ($status) {
            return [
                'id' => $status->id,
                'name' => $status->name,
                'tasks' => $status->tasks->load('status', 'priority')->map(function ($task) {
                    return [
                        'id' => $task->id,
                        'content' => $task->content,
                        'status' => $task->status->name,
                        'priority' => $task->priority->name,
                        // Add other task properties as needed
                    ];
                }),
            ];
        });
        // dd($allTasksPerStatus);

        return Inertia::render('Projects/Detail', [
            'project' => $project->load('status', 'tasks', 'modules', 'pages', 'priority'),
            'tasks' => Task::where('project_id', $project->id)->get(),
            'modules' => Module::where('project_id', $project->id)->with('status', 'tasks', 'priority')->get(),
            'pages' => Page::where('project_id', $project->id)->get(),
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