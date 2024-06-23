---
title: "Using overleaf with git"
categories:
  - Research
tags:
  - git
  - workflow
---

Overleaf, a popular online LaTeX editor, offers seamless collaboration features, but integrating it with Git can further enhance your workflow, especially for those who prefer version control systems. Here’s a quick guide to using Overleaf with Git.

## Setting Up Overleaf with Git

1. **Create a Project in Overleaf:**
   Start by creating a new project or selecting an existing one in Overleaf.

2. **Enable Git Access:**
   In the project menu, navigate to “Git” and enable Git access. Overleaf will provide a unique Git URL for your project.

3. **Clone the Repository:**
   Open your terminal and clone the Overleaf repository using the provided URL:
   ```bash
   git clone <your-overleaf-git-url>
   ```

4. **Work Locally:**
   You can now edit your project files locally using your preferred LaTeX editor. Commit your changes with:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

5. **Push Changes:**
   To push your local changes to Overleaf, use:
   ```bash
   git push
   ```

6. **Pull Updates:**
   To incorporate changes made directly on Overleaf or by collaborators, pull the updates:
   ```bash
   git pull
   ```

## Benefits

Using Git with Overleaf allows for better version control, offline work, and integration with other tools. This setup is particularly beneficial for teams, enabling concurrent editing and easy conflict resolution.

By leveraging Git, Overleaf users can maintain a robust and flexible document management system, enhancing both individual and collaborative LaTeX projects.
