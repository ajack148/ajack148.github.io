// survey.js

// === Function: Generate Intro Page ===
function generateIntro() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const caption = document.getElementById("imgCaption").value;
    const personal = document.getElementById("personalBackground").value;
    const professional = document.getElementById("professionalBackground").value;
    const academic = document.getElementById("academicBackground").value;
    const webDev = document.getElementById("webBackground").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funnyThing").value;
    const extra = document.getElementById("anythingElse").value;
  
    const courseInputs = document.querySelectorAll("input[name='courses[]']");
    const courses = Array.from(courseInputs)
      .filter((input) => input.value.trim() !== "")
      .map((input) => `<li>${input.value}</li>`) 
      .join("");
  
    const image = document.getElementById("introImage").files[0];
    const imageURL = image ? URL.createObjectURL(image) : "";
    const imageHTML = imageURL 
      ? `<figure><img src="${imageURL}" style="max-width: 300px;"><figcaption>${caption}</figcaption></figure>` 
      : "";
  
    const output = `
      <h4>${name}'s Introduction</h4>
      <h5>Mascot: ${mascot}</h5>
      ${imageHTML}
      <p><strong>Personal Background:</strong> ${personal}</p>
      <p><strong>Professional Background:</strong> ${professional}</p>
      <p><strong>Academic Background:</strong> ${academic}</p>
      <p><strong>Web Development Background:</strong> ${webDev}</p>
      <p><strong>Primary Platform:</strong> ${platform}</p>
      <p><strong>Courses Currently Taking:</strong></p>
      <ul>${courses}</ul>
      <p><strong>Funny Thing:</strong> ${funny}</p>
      <p><strong>Anything Else:</strong> ${extra}</p>
      <p><a href="#" onclick="resetForm()">Reset and Try Again</a></p>
    `;
  
    document.getElementById("introForm").style.display = "none";
    document.getElementById("generatedIntro").innerHTML = output;
  }
  
  // === Function: Reset Form ===
  function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("generatedIntro").innerHTML = "<h3>Your Personalized Intro Will Appear Below</h3>";
    document.getElementById("introForm").style.display = "block";
    document.getElementById("loadImage").innerHTML = "";
  }
  
  // === Function: Load and Preview Image ===
  function loadImage() {
    const image = document.getElementById("introImage").files[0];
    const previewSection = document.getElementById("loadImage");
  
    if (!image) {
      previewSection.innerHTML = "";
      return;
    }
  
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(image.type)) {
      alert("Please upload a PNG or JPG image.");
      document.getElementById("introImage").value = "";
      previewSection.innerHTML = "";
      return;
    }
  
    const imageUrl = URL.createObjectURL(image);
    const html = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 300px; margin-top: 10px;">`;
    previewSection.innerHTML = html;
  }
  
  // === Function: Add Course Field ===
  function addCourse() {
    const container = document.getElementById("courseContainer");
  
    const section = document.createElement("section");
    section.className = "course-input";
    section.innerHTML = `
      <h5>Course</h5>
      <input type="text" name="courses[]" placeholder="e.g. ITIS 3135">
      <button type="button" onclick="removeCourse(this)">Delete</button>
    `;
    container.appendChild(section);
  }
  
  // === Function: Remove Course Field ===
  function removeCourse(button) {
    button.parentElement.remove();
  }
  
  // === DOMContentLoaded Event ===
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
      }
  
      generateIntro();
    });
  
    form.addEventListener("reset", function () {
      resetForm();
    });
  });
  