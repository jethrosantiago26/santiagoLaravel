<?php
namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Artwork;
use Illuminate\Support\Facades\Storage;

class ArtworkController extends Controller
{
    public function index()
    {
        // Return artworks with image URLs
        $artworks = Artwork::all()->map(function ($art) {
            $art->image_url = $art->image ? asset('storage/' . $art->image) : null;
            return $art;
        });
        return response()->json($artworks);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|max:10240',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('artworks', 'public');
        }

        $artwork = Artwork::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        $artwork->image_url = $imagePath ? asset('storage/' . $imagePath) : null;
        return response()->json($artwork);
    }
}
