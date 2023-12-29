<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Active',
            ],
            [
                'name' => 'In Progress',
            ],
            [
                'name' => 'Completed',
            ],
            [
                'name' => 'Pending',
            ],
            [
                'name' => 'Cancelled',
            ],
            [
                'name' => 'Closed',
            ]
        ];

        foreach ($data as $key => $row){
            Status::create($row);
        }
    }
}
