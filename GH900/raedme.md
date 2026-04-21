## GitHub Foundations

[GitHub Foundations](https://learn.microsoft.com/en-us/training/courses/gh-900t00)

[Git](https://github.com/)

### Create a Repo

- Signin into the GitHub accoun. [GitHub](https://github.com/)

![Create a new Repo](/Assets/git/new-repo.png)


### Clone an existing repo

- Get/Copy the URL for the repo.

![URL](/Assets/git/copy-url.png)


### Push/Upload the files from a local folder on to the gitHub empty repo.

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/msadeedashraf/test-abc.git
git push -u origin main

```