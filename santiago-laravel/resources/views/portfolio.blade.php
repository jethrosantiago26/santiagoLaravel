@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Portfolio</h1>
    <form method="POST" action="{{ url('/portfolio') }}">
        @csrf
        <input type="text" name="title" placeholder="Artwork Title" required>
        <textarea name="description" placeholder="Description" required></textarea>
        <button type="submit">Add Artwork</button>
    </form>
    <hr>
    <h2>Artworks</h2>
    <ul>
        @foreach($artworks as $artwork)
            <li>
                <strong>{{ $artwork->title }}</strong>: {{ $artwork->description }}
            </li>
        @endforeach
    </ul>
</div>
@endsection
