<style scoped>
.container {
  margin: 0;
  padding: 0;
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
  padding: 128px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section > div {
  width: 90%;
  max-width: 600px;
}

.item {
  display: flex;
  gap: 32px;
  padding: 16px 32px;
  width: 100%;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.item:hover {
  box-shadow: rgba(149, 157, 165, 0.8) 0px 8px 24px;
}

.how-to {
  background: #d2fbe1;
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

    <section>
      <div class="section">
        <div>
          <h1 class="text-h3">Why Choose Our Stories?</h1>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/hand.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Personalized Tales</h2>
                <p>Tailored to your child's name, interests, and more.</p>
              </div>
            </li>
            <br />
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/education.png"
                  alt="hand settings"
                  width="60"
                />
              </div>

              <div>
                <h2>Educational Content</h2>
                <p>Stories designed to educate and entertain.</p>
              </div>
            </li>
            <br />
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/adventure-game.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Endless Adventures</h2>
                <p>
                  A new story every time, sparking creativity and imagination.
                </p>
              </div>
            </li>
            <br />
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/convenient.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Easy to Use</h2>
                <p>
                  Quickly generate stories with our user-friendly interface.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="how-to">
      <div class="section">
        <div>
          <h1 class="text-h3">How It Works</h1>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/content.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Step 1</h2>
                <p>Enter your child's name and role</p>
              </div>
            </li>
            <br />
            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/tap.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Step 2</h2>
                <p>Select the genre, countries, theme, and languages</p>
              </div>
            </li>
            <br />

            <li class="item drop-shadow-1">
              <div>
                <img
                  src="./../assets/icons/magic-wand.png"
                  alt="hand settings"
                  width="60"
                />
              </div>
              <div>
                <h2>Step 3</h2>
                <p>Generate and enjoy your unique story!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </v-container>
</template>