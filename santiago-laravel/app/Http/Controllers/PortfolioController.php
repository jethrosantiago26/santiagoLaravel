<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artwork;

class PortfolioController extends Controller
{
    public function index()
    {
        $artworks = Artwork::all();
        return view('portfolio', compact('artworks'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        Artwork::create($request->only('title', 'description'));
        return redirect('/portfolio');
    }
}
