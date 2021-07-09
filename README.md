# Technical challenge for ServicePros Installation Group

This challenge is part of the hiring process at SPIG for the DevOps engineer position.
The idea is to make as much progress as possible under a given time constraint. This
challenge should take you about 3-4 hours, but feel free to take longer than that if
necessary. The time constraint is more so to not take too much time from your day.

## Context

Your challenge is split into two phases:

- In the **[first phase](#first-phase)**, your objective is to build a docker 
environment to serve the provided application. This is the phase we will consider
when you submit your completed challenge.
- If you choose to complete the **[bonus phase](#bonus-phase)**, you will be expected
 to host your provided solution online, and explain the infrastructure chosen for hosting
 the application.

For either of the phases feel free to do as much research as possible. Please keep track
of the resources used while working on this challenge, if any, so we can ask questions
about it later. Don't feel ashamed of needing to consult resources. We understand that
there is a lot to know, and we would rather get a feel for how you deal with a roadblock
as opposed to think you know everything about anything.

## First phase

### Introduction

In this repository we are providing the frontend and backend for a very simple application.
This application is comprised of a Ruby on Rails backend providing fake user data in an API.
The frontend is a simple React application that needs to go through a build step before having
the static assets served by some kind of http server. Feel free to chose any server of your liking,
but the only changes to the repository we expect are the ones related to Docker.

In this phase we expect you to fork this repository and produce a docker environment that
serves the application. Both the frontend and the backend application need to be running
at the same time.

### Objective

The goal of this first phase is to implement the above requirements. The following is a rough
guide to help you see how we will analyze this challenge:

- [ ] Write the Dockerfile for each of the parts of this application. Backend and frontend.
- [ ] Each of the parts of this app should be able to run dockerized indempendently of each other - 
even if the frontend won't display any data if the backend is not running.
- [ ] Both the frontend and backend need to run together using one command
- [ ] When presenting your solution, volumes need to be deleted prior to issuing the command to
start the environment. Depending on how your Dockerfiles are composed, volume caching will keep 
the build artifacts in the volume, bypassing the build stage for the frontend. We want to see this 
running from scratch to ensure it is a repeatable process.
- [ ] The backend is a RoR application using postgres. The project uses the gem PG and this gem 
depends on the `libpq-dev` library. Make sure to ensure your Dockerfile for the backend accounts for
this dependency.


## Environment

We expect this first phase to be a simple PR into your fork of this repository. When you are finished 
with your challenge you will send us the link to your repository and we will try to run it locally.

## Bonus phase

### Introduction

If you have completed the first phase and would like to go the extra mile, in this bonus phase we
expect you to host your solution online. You are free to chose how you do this, but keep in mind
that if you do choose to complete the bonus phase, we will expect you to walk us through the
infrastructure you chose for this phase, and explain the reasoning behind the choices made.


### Objective

The goal of this bonus phase is to see how comfortable you are deploying code to a live environment. For
this phase, we don't expect you to spend any money. If you have access to a free tier in AWS, GCE, Azure,
or other free cloud solutions, that should suffice. If these aren't available to you, but you feel
comfortable walking us through the process you would take, that works too. If neither options are
suitable, remember that this is an optional phase.

- [ ] Explain the tradeoff taken, compared to the alternatives of the plaforms and technologies chosen
- [ ] Explain how each technology in the chosen stack works with the other technologies in the same stack
- [ ] This phase doesn't have to be hosted docker, it can be a real deployment of how this app would be
hosted if in a live production environment.

## Some guidances:

- If you have any questions regarding either of the phases, feel free to reach out to us and ask any
questions.
- If you get stuck with error messages when composing the Dockerfile, don't be afraid to ask. There are
no tricks in the app to trip you up, but it is possible that there are issues outside docker and may be
able to help you get unstuck.
- Research as much as possible. Docker documentation is great, but StackOverflow is just as good.
- Try to not spend too much time on any given problem. If you simply can't get something to work, we
would rather hear about the experience as a whole.

## Submission

- Send us the link to your repository. Make sure that you create a PR from your branch into your own
repository and send us the link with the PR merged into main in your repository.
- If you decide to complete the bonus phase, send us the link for the live version. During your next
interview we will ask that you share your screen and walk us through the infrastructure you chose.
