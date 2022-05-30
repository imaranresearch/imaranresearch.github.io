---
title: "Installation of Open-mpi on Mac OS X"
categories:
  - software
tags:

---

Installation of Open MPI is fairly straightforward

https://www.open-mpi.org/software/ompi/v2.0/

> tar xf openmpi-4.1.4.tar \
> cd openmpi-4.1.4/  \
> ./configure --prefix=$HOME/opt/usr/local \
> make all \
> make install \
> $HOME/opt/usr/local/bin/mpirun --version \
mpirun (Open MPI) 4.1.4
