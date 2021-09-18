<?php

namespace App\Http\Livewire;

use App\Models\show;
use Livewire\Component;

class Trend extends Component
{
    public $trend = [];
    protected $listeners = ['postAdded' => 'get'];
    public function get()
    {
        $this->trend = show::pushShow('top_rated','tv');
        $this->render();
    }

    public function render()
    {
        \dump('hellos');
        return view('livewire.trend')->with([
            'trend' => $this->trend
        ]);
    }
}
