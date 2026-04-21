## GitHub Foundations

[GitHub Foundations](https://learn.microsoft.com/en-us/training/courses/gh-900t00)

[Git](https://github.com/)

### Create a Repo

- Signin into the GitHub accoun. [GitHub](https://github.com/)

![Create a new Repo](/Assets/git/new-repo.png)

### Setup the Git

- Make sure you have these two setting are in the config.
- user.email "you@example.com"
- user.name "Your Name"

```
git config --list

git config --global user.email "you@example.com"

git config --global user.name "Your Name"

```


### Clone an existing repo

- Get/Copy the URL for the repo.

![URL](/Assets/git/copy-url.png)

- Go to the folder where you want the repo to be created
- Open the terminal

```
git clone <repo-url>

```

### Adding and pushing files into the cloned repo

- Makesure you are in the right/connected folder

```
git status

git add .

git commit -m "your message"

git push

```

### Push/Upload the files from a local folder on to the gitHub empty repo.

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/msadeedashraf/test-abc.git
git push -u origin main

```