<?php

namespace Database\Seeders;

use App\Models\Module;
use App\Models\Priority;
use App\Models\Project;
use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $data = [
        //     [
        //         'title' => 'Module ABC',
        //         'project_id' => 1,
        //     ],
        //     [
        //         'title' => 'Module ABC',
        //         'project_id' => 1,
        //     ],
        //     [
        //         'title' => 'Module ABC',
        //         'project_id' => 1,
        //     ],
        //     [
        //         'title' => 'Module ABC',
        //         'project_id' => 1,
        //     ],
        //     [
        //         'title' => 'Module 123',
        //         'project_id' => 2,
        //     ],
        //     [
        //         'title' => 'Test Module',
        //         'project_id' => 3,
        //     ],
        //     [
        //         'title' => 'Module Test',
        //         'project_id' => 4,
        //     ]
        // ];

        // foreach ($data as $key => $row){
        //     Module::create($row);
        // }

        for ($i = 1; $i <= Project::count(); $i++) {
            for ($j = 1; $j <= rand(1, 5); $j++) {
                $title = Project::find($i)->title . ' - ' . fake()->word();
                $data = [
                    // 'title' => Project::where('id', $i)->get('title') . ' ' . fake()->word(),
                    'title' => $title,
                    'slug' => Str::slug($title),
                    'project_id' => $i,
                    'priority_id' => rand(1, Priority::count()),
                    'status_id' => rand(1, Status::count()),
                ];
                Module::create($data);
            }
        }
    }
}