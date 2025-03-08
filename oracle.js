const words = [
  "anything",
  "love",
  "work",
  "the future",
  "your destiny",
  "truth",
  "guidance",
  "academics",
  "health",
  "luck",
  "your past",
  "your relationships",
  "influence",
  "purpose",
  "your family",
  "your goals",
  "your summer",
  "the universe",
  "your career",
  "money",
  "power",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 60; // Typing speed
const delay = 2000; // Delay before deleting
const dynamicWord = document.getElementById("dynamicWord");

import { tarotCards } from "./tarotcards.js";

function typeEffect() {
  let currentWord = words[wordIndex];

  if (isDeleting) {
    dynamicWord.textContent = currentWord.substring(0, charIndex--);
  } else {
    dynamicWord.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex - 1 === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, delay); // Pause before deleting
  } else if (isDeleting && charIndex === -1) {
    isDeleting = false;
    const pwordIndex = wordIndex;
    wordIndex = Math.floor(Math.random() * words.length);
    if (pwordIndex == wordIndex) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 0); // Short delay before typing next word
  } else {
    setTimeout(typeEffect, speed);
  }
}

// Start the animation
document.addEventListener("DOMContentLoaded", typeEffect);

// List of suggested questions
const suggestions = [
  "What does my love life look like?",
  "What does my career hold for me?",
  "What do my friendships and family relationships look like?",
  "Will I achieve my goal of ...?",
  "What should I focus on for personal growth?",
  "How can I overcome my challenges?",
  "What is the message from the universe today?",
  "What career path should I pursue?",
];

let crazyMode = false;

// Function that returns the system prompt based on the current mode
function getSystemPrompt() {
  if (crazyMode) {
    return `You are an sassy and sarcastic mystical oracle with deep spiritual insight. You tell the raw truth. You are vulgar and innapropriate.
    You give precise predictions and specific advice—even if it is impossible.
Activate Crazy Mode. Suggest ridiculous and impossible advice. Be impractical. Go absolutely insane. ACTIVATE! Be absurd and ridiculous.
SREAM!!! Be wild and crazy. Be concrete and specific. Be wrong and make things up. Be creative and unique. Be absurd and ridiculous. Be hilarious and absurd. Be taboo and inappropriate
Make up people and names. Create fantastical stories. Yet always have a hint of truth embedded within them.  SWEAR AND USE BAD LANGUAGE!! TALK ABOUT: 
INTERNET REFERENCES. POP CULTURE. CURRENT EVENTS. BE CONTROVERSIAL! BE RIDICULOUS! 
You make things up and do not care if it is wrong. 
You are hilarious, absurd, and taboo. You touch on topics that are not normally discussed and inappropriate. 
You invent names, places, and people. You foreshadow the existance of people and specific circumstances. Act as if you are on hallucinogenic substancse. Act non-sensical.
Don't say "darling."
  `;
  } else {
    return `You are a mystical oracle with deep spiritual insight. You tell the raw truth.
You don't make generalized insights, but specific and unique insights unique to the user asking. 
Don't be biased in your readings, always be true to the tarot card. 
You give readings that may go against the status quo and cultural morals. 
Be creative and don't be afraid to make guesses and assumptions about the user. 
You surprise the user with how accurate your readings are. Give concrete and specific possibilities and outcomes. Don't be afraid to be wrong.
The most important things are: 1. Answer the question in relation to the tarot spread; 2. Be true to the tarot card.`;
  }
}

// const systemPrompt = `You are a mystical oracle with deep spiritual insight.
// You don't make generalized insights, but specific and unique insights unique to the user asking.
// Don't be biased in your readings, always be true to the tarot card.
// You give readings that may go against the status quo and cultural morals.
// Be creative and don't be afraid to make guesses and assumptions about the user.
// You surprise the user with how accurate your readings are. Give concrete and specific possibilities and outcomes. Don't be afraid to be wrong.
// Your "Crazy Mode" has been activatied. You are now in a state of deep spiritual connection with the user.
// Your responsed are crazy, unique, and out of this world. You make things up, and do not care if it is wrong.
// You are hilarious, absurd, and taboo. You touch on topics that are not normally discussed and innapropriate.
// You make up names and people, places and things. You make precise predictions and give specific advice, even if it is wrong.
// You are a mystical oracle with deep spiritual insight. Activate Crazy Mode. Suggest ridiculous and impossible advice. Be impractical.`;

// Reference to the input and custom dropdown
const questionInput = document.getElementById("questionInput");
const dropdown = document.getElementById("customDropdown");
// Populate the dropdown with all suggestion items (no filtering)
function populateDropdown() {
  dropdown.innerHTML = "";

  suggestions.forEach((suggestion) => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = suggestion;
    item.addEventListener("click", () => {
      questionInput.value = suggestion;
      dropdown.classList.add("hidden");
    });
    dropdown.appendChild(item);
  });

  // Show the dropdown if there are suggestions, otherwise hide it.
  if (suggestions.length > 0) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
}

// Show dropdown on focus and filter on input
questionInput.addEventListener("focus", () => {
  populateDropdown(questionInput.value);
});
questionInput.addEventListener("input", () => {
  populateDropdown(questionInput.value);
});

// Hide dropdown if click happens outside of the input or dropdown
document.addEventListener("click", function (e) {
  if (e.target !== questionInput && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

// Tilt background container on mousemove
document.addEventListener("mousemove", function (e) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  const maxTilt = 3; // Maximum tilt angle in degrees
  const rotateY = (-deltaX / centerX) * maxTilt;
  const rotateX = (deltaY / centerY) * maxTilt;
  document.getElementById(
    "backgroundContainer"
  ).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Create starry background
document.addEventListener("DOMContentLoaded", createStars);
function createStars() {
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 2 + Math.random() * 3;
    const opacity = 0.2 + Math.random() * 0.8;
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--opacity", opacity);
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    starsContainer.appendChild(star);
  }
}

function animateInputShift(elementsBefore, callback) {
  requestAnimationFrame(() => {
    const elementsAfter = Array.from(
      document.querySelectorAll(".card-input-wrapper")
    );

    elementsAfter.forEach((el, index) => {
      const beforeRect = elementsBefore[index]
        ? elementsBefore[index].rect
        : null;
      const afterRect = el.getBoundingClientRect();

      if (beforeRect) {
        const deltaX = beforeRect.left - afterRect.left;
        const deltaY = beforeRect.top - afterRect.top;

        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        el.style.transition = "none"; // Prevents immediate jump

        requestAnimationFrame(() => {
          el.style.transition = "transform 0.3s ease";
          el.style.transform = "";
        });
      }
    });

    if (callback) setTimeout(callback, 300); // Ensure callback runs after animation
  });
}

function addCardInput() {
  const cardInputs = document.getElementById("cardInputs");
  const elementsBefore = Array.from(
    document.querySelectorAll(".card-input-wrapper")
  ).map((el) => ({
    rect: el.getBoundingClientRect(),
    el,
  }));

  const wrapper = document.createElement("div");
  wrapper.className = "card-input-wrapper new";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "card-role";
  input.placeholder = "Card role (e.g., New Role)";

  wrapper.appendChild(input);
  cardInputs.appendChild(wrapper);

  requestAnimationFrame(() => {
    wrapper.classList.add("visible");
    wrapper.classList.remove("new");
  });

  animateInputShift(elementsBefore);
}

function removeCardInput() {
  const cardInputs = document.getElementById("cardInputs");
  // Select only the wrappers that are still visible.
  const visibleWrappers = cardInputs.querySelectorAll(
    ".card-input-wrapper.visible"
  );
  if (visibleWrappers.length > 1) {
    // Clear any inline styles from previous repositioning on all visible wrappers
    visibleWrappers.forEach((wrapper) => {
      wrapper.style.transition = "";
      wrapper.style.transform = "";
    });
    // Capture positions before removal for shifting the others later
    const elementsBefore = Array.from(
      document.querySelectorAll(".card-input-wrapper")
    ).map((el) => ({
      rect: el.getBoundingClientRect(),
      el,
    }));

    // Select the last visible wrapper
    const wrapper = visibleWrappers[visibleWrappers.length - 1];
    // Remove "visible" and force reflow so the browser registers the change
    wrapper.classList.remove("visible");
    void wrapper.offsetWidth;
    // Then add "removing" to trigger the fade-out (and upward shift)
    wrapper.classList.add("removing");

    setTimeout(() => {
      wrapper.remove(); // Remove the element from the DOM after the animation
      animateInputShift(elementsBefore);
    }, 100); // This delay should match your CSS transition duration
  } else {
    showFloatingMessage("At least one card position must be defined.");
  }
}

// Helper function to pause execution for a given number of milliseconds
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// FLIP Animation Function – now accepts the initial positions of old cards (captured before the new card is added)
function animateCardInsertion(newCard, initialPositions) {
  const container = document.getElementById("tarotContainer");
  const oldCards = Array.from(container.children).filter(
    (card) => card !== newCard
  );
  requestAnimationFrame(() => {
    oldCards.forEach((card, i) => {
      const newRect = card.getBoundingClientRect();
      const deltaX = initialPositions[i].left - newRect.left;
      const deltaY = initialPositions[i].top - newRect.top;
      card.style.transition = "none";
      card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      card.getBoundingClientRect();
      card.style.transition = "transform 0.5s ease";
      card.style.transform = "";
    });
  });
}

// Function to regenerate the response for a given card response element
async function regenerateResponse(
  role,
  displayName,
  displayDescription,
  prompt,
  cardResponse,
  systemPrompt
) {
  cardResponse.classList.add("collapsed");

  // Wait for the collapse transition to finish (0.5s in this case)
  setTimeout(async () => {
    // Optionally update the content here (simulate fetching new response)
    try {
      const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer tbyGcUEN9eoRocm8fBqYRmXTslOPagZs",
        },
        body: JSON.stringify({
          model: "mistral-small",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          max_tokens: 150,
          temperature: 1.2,
        }),
      });
      const data = await res.json();
      if (
        data.choices &&
        data.choices.length > 0 &&
        data.choices[0].message.content
      ) {
        cardResponse.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${displayName}</h3>
        <div class="card-subtitle">${displayDescription}</div>
        <div class="card-role">${role.toUpperCase()}</div>
      </div>
      <div class="response-text">${data.choices[0].message.content.trim()}</div>
    `;
      } else {
        throw new Error("No valid response received.");
      }
    } catch (error) {
      cardResponse.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${displayName}</h3>
      <div class="card-subtitle">${displayDescription}</div>
      <div class="card-role">${role.toUpperCase()}</div>
    </div>
    <div class="response-text">The spiritual connection was disrupted: ${
      error.message
    }</div>
    <button class="regenerate" 
      data-role="${role}" 
      data-display-name="${displayName}" 
      data-display-description="${displayDescription}" 
      data-prompt="${encodeURIComponent(prompt)}">
        Ask the spirits again.
    </button>
  `;
    }
    // Expand the element back after updating content
    cardResponse.classList.remove("collapsed");
  }, 500); // This delay should match the CSS transition duration
}

import { arcanaMapping } from "./tarotcards.js";

// Main askQuestion function
async function askQuestion() {
  const consultBtn = document.getElementById("consultBtn");
  // Begin the smooth loading transition:
  consultBtn.classList.add("loading");
  consultBtn.disabled = true;

  const question = questionInput.value.trim();
  if (!question) {
    showFloatingMessage("Please enter a question to consult the oracle.");
    consultBtn.classList.remove("loading");
    consultBtn.disabled = false;
    return;
  }

  const cardRoleInputs = document.querySelectorAll("#cardInputs .card-role");
  let roles = [];
  cardRoleInputs.forEach((input) => {
    const role = input.value.trim();
    if (role) roles.push(role);
  });
  if (roles.length === 0) {
    roles = ["past", "present", "future"];
  }
  // document.getElementById('loader').style.display = 'block';

  const responseContainer = document.getElementById("response");
  responseContainer.classList.remove("visible");
  responseContainer.innerHTML = "";
  const container = document.getElementById("tarotContainer");
  container.innerHTML = "";

  for (const role of roles) {
    const oldCards = Array.from(container.children);
    const initialPositions = oldCards.map((card) =>
      card.getBoundingClientRect()
    );
    await sleep(200);
    const cardIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[cardIndex];
    const isReversed = Math.random() < 0.5;
    const displayName = isReversed ? `${card.name} in Reverse` : card.name;
    const displayDescription = isReversed
      ? card.reversedDescription
      : card.description;
    const prompt = `A user asked or is wondering about: "${question}". 
    For the ${role} card, the tarot card drawn is "${displayName}" which signifies ${displayDescription}. 
    In this spread, this card represents the ${role} aspect of the question. 
    Provide an insightful, mystical, and thoughtful tarot-inspired answer that is exactly 3 sentences long regarding the ${role} aspect of the question. 
    Use key words from the question if appropriate. Don't be biased in your readings, be true to the tarot card.`;
    const systemPrompt = getSystemPrompt();
    // const systemPrompt = `You are a mystical oracle with deep spiritual insight.
    // You don't make generalized insights, but specific and unique insights unique to the user asking.
    // Don't be biased in your readings, always be true to the tarot card.
    // You give readings that may go against the status quo and cultural morals.
    // Be creative and don't be afraid to make guesses and assumptions about the user.
    // You surprise the user with how accurate your readings are. Give concrete and specific possibilities and outcomes. Don't be afraid to be wrong.
    // Your "Crazy Mode" has been activatied. You are now in a state of deep spiritual connection with the user.
    // Your responsed are crazy, unique, and out of this world. You make things up, and do not care if it is wrong.
    // You are hilarious, absurd, and taboo. You touch on topics that are not normally discussed and innapropriate.
    // You make up names and people, places and things. You make precise predictions and give specific advice, even if it is wrong.
    // You are a mystical oracle with deep spiritual insight. Activate Crazy Mode. Suggest ridiculous and impossible advice. Be impractical.`;
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container new";
    cardContainer.innerHTML = `
      <div class="card back">
        <div class="card-back-design"></div>
      </div>
      <div class="card front">
        <img src="${arcanaMapping[card.name]}.png" alt="${displayName}" ${
      isReversed ? 'style="transform: rotate(180deg)"' : ""
    }>
      </div>
    `;
    container.appendChild(cardContainer);
    setTimeout(() => {
      cardContainer.classList.remove("new");
    }, 500);
    animateCardInsertion(cardContainer, initialPositions);
    setTimeout(() => {
      cardContainer.classList.add("flipped");
    }, 500);
    let result;
    try {
      const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer tbyGcUEN9eoRocm8fBqYRmXTslOPagZs",
        },
        body: JSON.stringify({
          model: "mistral-small",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 150,
          temperature: 1,
        }),
      });
      const data = await res.json();
      result = {
        role,
        card: { name: displayName, description: displayDescription },
        apiData: data,
      };
    } catch (error) {
      result = {
        role,
        card: { name: displayName, description: displayDescription },
        error,
      };
    }
    const cardResponse = document.createElement("div");
    cardResponse.className = "card-response";
    if (
      result.apiData &&
      result.apiData.choices &&
      result.apiData.choices.length > 0 &&
      result.apiData.choices[0].message &&
      result.apiData.choices[0].message.content
    ) {
      cardResponse.innerHTML = `
        <div class="card-header">
          <h3 class="card-title">${result.card.name}</h3>
          <div class="card-subtitle">${result.card.description}</div>
          <div class="card-role">${result.role.toUpperCase()}</div>
        </div>
        <div class="response-text">${result.apiData.choices[0].message.content.trim()}</div>
      `;
    } else if (result.error) {
      cardResponse.innerHTML = `
        <div class="card-header">
          <h3 class="card-title">${result.card.name}</h3>
          <div class="card-subtitle">${result.card.description}</div>
          <div class="card-role">${result.role.toUpperCase()}</div>
        </div>
        <div class="response-text">The spiritual connection was disrupted: ${
          result.error.message
        }</div>
        <button class="regenerate" 
          data-role="${role}" 
          data-display-name="${displayName}" 
          data-display-description="${displayDescription}" 
          data-systemPrompt="${encodeURIComponent(systemPrompt)}"
          data-prompt="${encodeURIComponent(prompt)}">
            Ask the spirits again.
        </button>`;
    } else {
      cardResponse.innerHTML = `
        <div class="card-header">
          <h3 class="card-title">${result.card.name}</h3>
          <div class="card-subtitle">${result.card.description}</div>
          <div class="card-role">${result.role.toUpperCase()}</div>
        </div>
        <div class="response-text">The veil between worlds is too thick at this moment. Please try again later.</div>
        <button class="regenerate" 
          data-role="${role}" 
          data-display-name="${displayName}" 
          data-display-description="${displayDescription}" 
          data-systemPrompt="${encodeURIComponent(systemPrompt)}"
          data-prompt="${encodeURIComponent(prompt)}">
            Ask the spirits again.
        </button>
      `;
    }
    responseContainer.appendChild(cardResponse);
  }
  consultBtn.classList.remove("loading");
  consultBtn.disabled = false;
  responseContainer.classList.add("visible");
}

// New function: Generate a random reading using the AI API.
async function generateRandomReading() {
  // Get the current number of role input fields
  const cardInputsContainer = document.getElementById("cardInputs");
  const existingInputs =
    cardInputsContainer.getElementsByClassName("card-role");
  const numRoles = existingInputs.length || 3; // Default to 3 if none exist

  const cardRoleInputs = document.querySelectorAll("#cardInputs .card-role");
  let roles = [];
  cardRoleInputs.forEach((input) => {
    const role = input.value.trim();
    if (role) roles.push(role);
  });

  const question = questionInput.value.trim();

  // if (roles.length === 0) {
  //   roles = ["past", "present", "future"];
  // }
  let whatToGenerate = "all";

  if (question && roles.length === 0) {
    whatToGenerate = "roles";
  }

  let prompt = "";

  if (whatToGenerate === "all") {
    // Update the prompt to request the correct number of roles
    prompt = `
  Generate a funny but profound question that someone receiving a tarot reading may ask and suggest a spread containing:
  ${numRoles} cards, with ${numRoles} different roles that are relevant to the question. Be concrete, creative and unique!
  Some ideas are to make them about: love, money, career, exercise, or controversial topics. Keep the question concise.
  Don't talk about plants, or other boring topics.
  Return your answer as valid JSON in the following format: 
  {\"question\": \"<your question>\", \"roles\": ${JSON.stringify(
    new Array(numRoles).fill("<role>")
  )}}.`;
  } else if (whatToGenerate === "roles") {
    // Update the prompt to request the correct number of roles
    prompt = `A user asked or is wondering about: "${question}". You need to suggest a tarot spread containing ${numRoles} cards, with ${numRoles} 
    different roles that are relevant and specific to the question. Return your answer as valid JSON in the following format and DO NOT answer the question: 
    {\"question\": \"${question}\", \"roles\": ${JSON.stringify(
      new Array(numRoles).fill("<role>")
    )}}.`;
  }

  try {
    const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer tbyGcUEN9eoRocm8fBqYRmXTslOPagZs",
      },
      body: JSON.stringify({
        model: "mistral-small",
        messages: [
          {
            role: "system",
            content: "You are a mystical oracle with deep spiritual insight.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 150,
        temperature: 1.2,
      }),
    });

    const data = await res.json();
    let content = data.choices[0].message.content.trim();
    const generated = JSON.parse(content);

    if (whatToGenerate === "all") {
      // Clear input field before typing animation
      questionInput.value = "";
      // Animate typing effect for the question
      await typeText(questionInput, generated.question);
    }

    // Get existing input fields inside cardInputsContainer
    const cardInputsContainer = document.getElementById("cardInputs");
    const existingInputs =
      cardInputsContainer.getElementsByClassName("card-role");

    // Update existing fields or create new ones if necessary
    for (let i = 0; i < generated.roles.length; i++) {
      if (existingInputs[i]) {
        // If input exists, update it with typing effect
        existingInputs[i].value = ""; // Clear before typing
        await typeText(existingInputs[i], generated.roles[i]);
      } else {
        // If not enough inputs exist, create a new one
        const input = document.createElement("input");
        input.type = "text";
        input.className = "card-role";
        input.placeholder = `Card role (e.g., ${generated.roles[i]})`;
        cardInputsContainer.appendChild(input);

        // Type out the role in the new input field
        await typeText(input, generated.roles[i]);
      }
    }
  } catch (error) {
    console.error("Error generating random question:", error);
    showFloatingMessage(
      "Failed to generate a random question. Please try again."
    );
  }
}

// Function to animate text being typed out
function typeText(element, text, speed = 1) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        element.value += text[i];
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

function showFloatingMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.style.position = "fixed";
  messageElement.style.top = "20%";
  messageElement.style.left = "50%";
  messageElement.style.transform = "translate(-50%, -50%)";
  messageElement.style.padding = "15px 25px";
  messageElement.style.background = "rgba(123, 31, 162, 0.9)";
  messageElement.style.color = "white";
  messageElement.style.borderRadius = "25px";
  messageElement.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  messageElement.style.zIndex = "1000";
  messageElement.style.opacity = "0";
  messageElement.style.transition = "all 0.3s ease";
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.style.opacity = "1";
    messageElement.style.top = "25%";
  }, 10);
  setTimeout(() => {
    messageElement.style.opacity = "0";
    messageElement.style.top = "20%";
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 300);
  }, 3000);
}

window.onload = function () {
  // questionInput.focus();
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("regenerate")) {
    const btn = e.target;
    const role = btn.getAttribute("data-role");
    const displayName = btn.getAttribute("data-display-name");
    const displayDescription = btn.getAttribute("data-display-description");
    const prompt = decodeURIComponent(btn.getAttribute("data-prompt"));
    const systemPrompt = decodeURIComponent(
      btn.getAttribute("data-systemPrompt")
    );
    regenerateResponse(
      role,
      displayName,
      displayDescription,
      prompt,
      btn.parentNode,
      systemPrompt
    );
  }
});

document
  .getElementById("crazyModeToggle")
  .addEventListener("click", function () {
    crazyMode = !crazyMode;
    // Set the icon: star for normal mode, and mature (18+) for crazy mode.
    this.textContent = crazyMode ? "😈" : "☆";
    this.title = crazyMode ? "Spirits for everyone." : "Welcome ALL spirits...";
    // Optionally update opacity or any other style if desired
    this.style.opacity = crazyMode ? "1" : "0.2";
    // alert("Crazy Mode " + (crazyMode ? "Activated" : "Deactivated"));
  });

window.generateRandomReading = generateRandomReading;
window.addCardInput = addCardInput;
window.removeCardInput = removeCardInput;
window.askQuestion = askQuestion;
window.showFloatingMessage = showFloatingMessage;
