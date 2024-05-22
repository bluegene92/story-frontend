<style scoped>
.container {
  margin: 0;
  padding: 0;
  border: 1px solid red;
}

.landing {
  background: url("./../assets/bg3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 64px;
}

.headline {
  padding: 48px;
  width: 400px;
}

.action-btn {
  width: 100%;
  background-color: #00e994;
  background-image: linear-gradient(160deg, #00b615 0%, #9ef8c8 100%);
}

.section {
  padding: 32px 64px;
  display: flex;
  flex-direction: row;
  gap: 64px;
}
</style>

<template>
  <v-container class="container" fluid fill-height>
    <section class="landing">
      <v-card class="headline rounded-md elevation-1">
        <h1 class="text-h3 font-weight-bold text-green">
          Unlock the Magic of Storytelling with AI
        </h1>
        <p>
          Create personalized, enchanting stories for your child in just a few
          clicks.
        </p>
        <br />
        <br />
        <v-btn class="action-btn rounded-xl">Generate Now</v-btn>
      </v-card>
    </section>

    <br />
    <br />

    <section>
      <div class="section">
        <div>
          <p>Features</p>
          <h1 class="text-h4">Why Choose Our Stories?</h1>
        </div>

        <div>
          <ul>
            <li class="tw-drop-shadow-sm color-blue">
              <h2>Personalized Tales</h2>
              <p>Tailored to your child's name, interests, and more.</p>
            </li>
            <br />
            <li>
              <h2>Educational Content</h2>
              <p>Stories designed to educate and entertain.</p>
            </li>
            <br />
            <li>
              <h2>Endless Adventures</h2>
              <p>
                A new story every time, sparking creativity and imagination.
              </p>
            </li>
            <br />
            <li>
              <h2>Easy to Use</h2>
              <p>Quickly generate stories with our user-friendly interface.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section><div class="section"></div></section>
  </v-container>
</template>