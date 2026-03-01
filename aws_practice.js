fetch("officerList.json")
  .then(res => res.json())
  .then(officerList => {
    const container = document.getElementById("officerList-container");

    officerList.forEach(officer => {
  container.innerHTML += `
    <div class="card">
      <h3>${officer.name}</h3>
      <p>${officer.role}</p>
    </div>
  `;
});
  });