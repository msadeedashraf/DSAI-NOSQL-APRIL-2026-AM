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

### Create GitHub Repo from CLI

- gh --version 
- If it fails Install GitHub CLI

```
winget install GitHub.cli

```
- or Download Go to : [githubCLI](https://cli.github.com)
- Download Windows .msi installer
- Run installer → next → finish
- and verify gh --version

```
mkdir sample-project

cd sample-project

git init

echo Hello from Sadeed > Readme.md

git status

git add .

git commit -m "Initial Commit"

git branch -M main

gh auth login

gh repo list

gh repo create sample-project --public --source=. --remote=origin --push

```

- --public --> anyone can see
- --source=. --> . = current directory ( --source=../anyother-folder)
- --remote=origin --> Name for the connection between local and GitHub (git remote add origin <repo-url>) --> (--remote=myserver) then (git push myserver main) 
- --push --> Automatically pushes your local commits to GitHub

