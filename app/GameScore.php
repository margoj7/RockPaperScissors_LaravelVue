<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GameScore extends Model
{
    protected $fillable = ['playerChoice', 'computerChoice', 'winner'];
}