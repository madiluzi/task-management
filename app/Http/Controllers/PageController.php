<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Models\Page;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Pages/Index', [
            'pages' => new ProjectCollection(Page::latest()->paginate(10)),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pages/Create', [
            'projects' => Project::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'project_id' => 'required'
        ]);

        Page::create($validated);
        return redirect()->route('pages.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        return Inertia::render('Pages/Index', [
            'pages' => Page::all(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        return Inertia::render('Pages/Edit', [
            'page' => $page,
            'projects' => Project::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'project_id' => 'required'
        ]);

        $page->update($validated);

        return redirect()->route('pages.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();
        return redirect()->route('pages.index');
    }
}