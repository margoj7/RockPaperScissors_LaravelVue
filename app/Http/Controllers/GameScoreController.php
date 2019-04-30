<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\GameScoreCollection;
use App\GameScore;

class GameScoreController extends Controller
{
    public function store(Request $request)
    {
      $gameScore = new GameScore([
        'playerChoice' => $request->get('playerChoice'),
        'computerChoice' => $request->get('computerChoice'),
        'winner' => $request->get('winner')
      ]);

      $gameScore->save();

      return response()->json('successfully added');
    }

    public function history()
    {
      return new GameScoreCollection(GameScore::all());
    }
}
