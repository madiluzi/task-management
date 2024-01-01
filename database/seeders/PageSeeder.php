<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\Project;
use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Page::create([
        //     'title' => 'Page ABC',
        //     'content' => 'Content ABC',
        //     'project_id' => 1,
        // ]);

        for ($i = 1; $i <= Project::count(); $i++) {
            for ($j = 1; $j <= rand(1, 5); $j++) {
                $data = [
                    'title' => Project::find($i)->title . ' ' . fake()->word(),
                    'content' => fake()->sentence(3),
                    'project_id' => $i,
                ];
                Page::create($data);
            }
        }
    }
}