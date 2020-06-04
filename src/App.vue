<template>
  <div id="app">
    <div id="header" class="flex bg-white border-b border-gray-200 h-16 items-center">
      <div id="nav" class="mx-auto px-6 reactive flex items-center w-full">
        <div id="title" class="mr-auto">
          <h1>Book Store</h1>
        </div>
        <div id="menu" class="ml-auto flex flex-row">
          <router-link class="mx-6" to="/">Home</router-link>
          <router-link class="mx-6" to="/checkout">Check Out</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>