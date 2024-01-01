<?php

namespace Database\Seeders;

use App\Models\Module;
use App\Models\Priority;
use App\Models\Project;
use App\Models\Status;
use App\Models\Task;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $data = [
        //     [
        //         'content' => 'Task ABC',
        //         'project_id' => 1,
        //         'module_id' => 1,
        //         'status_id' => 1,
        //     ], [
        //         'content' => 'Task 123',
        //         'project_id' => 1,
        //         'module_id' => 2,
        //         'status_id' => 1,
        //     ], [
        //         'content' => 'Task Test',
        //         'project_id' => 1,
        //         'module_id' => 1,
        //         'status_id' => 1,
        //     ], [
        //         'content' => 'Tasks',
        //         'project_id' => 1,
        //         'module_id' => 3,
        //         'status_id' => 2,
        //     ], [
        //         'content' => 'Task ABC',
        //         'project_id' => 1,
        //         'module_id' => 1,
        //         'status_id' => 2,
        //     ], [
        //         'content' => 'Task 123',
        //         'project_id' => 1,
        //         'module_id' => 2,
        //         'status_id' => 2,
        //     ], [
        //         'content' => 'Task Test',
        //         'project_id' => 1,
        //         'module_id' => 1,
        //         'status_id' => 3,
        //     ], [
        //         'content' => 'Tasks',
        //         'project_id' => 1,
        //         'module_id' => 3,
        //         'status_id' => 3,
        //     ]
        // ];

        // foreach ($data as $key => $row){
        //     Task::create($row);
        // }

        for ($i = 1; $i <= Status::count(); $i++) {
            for ($j = 1; $j <= Project::count(); $j++) {
                for ($k = 1; $k <= rand(0, 1); $k++) {
                    $data = [
                        'content' => Project::find($j)->title . ' ' . fake()->sentence(2),
                        'project_id' => $j,
                        'module_id' => rand(1, Module::count()),
                        'priority_id' => rand(1, Priority::count()),
                        'status_id' => rand(1, Status::count()),
                    ];
                    Task::create($data);
                }
            }
        }
    }
}