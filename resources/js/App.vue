<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/game" class="nav-link">The Game</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/history" class="nav-link">Game Score History</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>