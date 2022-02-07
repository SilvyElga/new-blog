let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project-name").value;
  let date1 = document.getElementById("input-start-date").value;
  let date2 = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let check1 = document.querySelector(".check1:checked").value;
  let check2 = document.querySelector(".check2:checked").value;
  let check3 = document.querySelector(".check3:checked").value;
  let check4 = document.querySelector(".check4:checked").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);
  const oneDay = 24 * 60 * 60 * 1000;
  let blog = {
    project,
    date1,
    date2,
    hari: Math.round(Math.abs((new Date(date1) - new Date(date2)) / oneDay)),
    description,
    check1,
    check2,
    check3,
    check4,
    image,
    // postedAt= new Date ()
  };

  blogs.push(blog);
  console.log(check1);
  renderBlog();
}

function renderBlog() {
  let lengthData = blogs.length;

  let blogContainer = document.getElementById("contents");

  blogContainer.innerHTML = "";

  let i = 0;
  for (i; i < lengthData; i++) {
    blogContainer.innerHTML += `
        <div class="card">
                  <div class="image"><img src="${blogs[i].image}"></div>
                    <h3><a href="detail.html" target="_blank">Dumbways Mobile App-2021</a></h3>
                    <div class="time">
                    <span>durasi:${blogs[i].hari} hari</span>
                  </div>
                  <p>${blogs[i].description}</p>
                  <div class="icon">
                    <img src="${blogs[i].check1}">
                    <img src="${blogs[i].check2}">
                    <img src="${blogs[i].check3}">
                    <img src="${blogs[i].check4}">
                  </div>
                  
                </div> `;
  }
}


