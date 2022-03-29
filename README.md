<div align="center">
  <img width="640" alt="hero-darkmode" src="https://user-images.githubusercontent.com/34704796/156898483-fb7eb0a5-507d-457e-9563-fd950d424c7c.png#gh-dark-mode-only">
  <img width="640" alt="hero-lightmode" src="https://user-images.githubusercontent.com/34704796/156898501-bd54e515-7ecc-49a9-8a58-84f67af717d2.png#gh-light-mode-only">

  <hr>

  <p>🤖 Automated Git commiter to green-ify your Github profile</p>

  <br>

  <h4>Random beers from <strong>punkapi.com</strong></h4>
  <h3>Make Earth Great Again<br>Tagline: Cloudberry Saison.</h3>

  <br>
</div>

## 🙋‍♂️ How does it works?

Using the power of [Github Actions](https://github.com/features/actions), we could create a scheduled job to commit a change to Github.

Using [Node](https://nodejs.org), we can change the README file (you're reading it now) to something interesting everytime. This could be easily modified on `writer.js`.

<sub>Oh, I also have to credit [`erickchann`](https://github.com/erickchann) for the idea.</sub>

## 🔧 Can we modify this to our liking?

Absolutely! Just go to the `writer.js` code conveniently sitting at the root directory, you could change the README file template or add other cool things.

You could also change how frequent the job occurs. Just modify the **`runner.yml`** file at `.github/workflows`, `schedule` section. Feel free to change the cronjob to something reasonable.

**Don't forget to change the Git email and username!!**

<sub>Don't know how to cronjob? [Take this with you](https://crontab.guru)</sub>

## 📋 What about licensing?

This project is licensed under the [Unlicense](https://unlicense.org) license.

<br>

<sub>Last updated at <strong>29/03/2022, 18:15:34 UTC</strong></sub>