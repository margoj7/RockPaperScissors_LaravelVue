<template>
  <div class="row justify-content-center">
    <div class="col-md-8 content">
      <h3 class="routeDescription">Welcome to my humble game!</h3>
      <p class="description">Hello there, brave wanderer!<br>
        Allow me to take you on a magical Journey.<br>
        The Journey of wonders,<br>
        the Journey of self discovery,<br>
        the Journey of joy...</p>
      <p class="emphasise">Behold! The marvelous world of<br>
      <span class="titleText">Rock! Paper! Scissors!</span></p>
      <button type="button" class="btn btn-primary startButton">
        <router-link to="/game" class="nav-link startLink">Let's play a game!</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>