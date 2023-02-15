<template>
  <header>
    <h1>VITE PROJEKT</h1>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">HEM</RouterLink>
        </li>
        <li>
          <RouterLink to="/gallery">GALLERIET</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
  background-color: rgb(56, 54, 54);
  color: antiquewhite;
}

h1 {
  margin-right: auto;
  font-size: 40px;
  font-weight: 200;
}

li {
  display: inline-block;
  list-style-type: none;
  padding-left: 30px;
  font-size: 27px;
}

li a, a:active, a:visited {
  text-decoration: none;
  color: antiquewhite;
}

li a:hover {
  color: rgb(151, 158, 158);
}
</style>
