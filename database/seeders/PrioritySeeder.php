<?php

namespace Database\Seeders;

use App\Models\Priority;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrioritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Low',
            ],
            [
                'name' => 'Medium',
            ],
            [
                'name' => 'High',
            ],
            [
                'name' => 'Urgent',
            ]
        ];

        foreach ($data as $key => $row){
            Priority::create($row);
        }
    }
}
