const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
const form = document.querySelector("form") as HTMLFormElement;
const pre = document.querySelector("pre") as HTMLPreElement;

let query = "";
textarea.addEventListener("input", (e) => {
  query = textarea.value;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(query);

  const res = await fetch(
    "http://ec2-3-106-206-105.ap-southeast-2.compute.amazonaws.com/sparql",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        query,
      }).toString(),
    }
  );
  const json = await res.json();
  console.log(json);
  pre.textContent = JSON.stringify(json, null, 2);
});
