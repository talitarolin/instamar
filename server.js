
const { v4 } = require("uuid");
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Route to create a new profile
app.post('/profiles', async (req, res) => {
  const { username, nickname,email, bio, photo } = req.body;
console.log(username,nickname,email,bio,photo)
  try {
    const newProfile = await prisma.profile.create({
      data: {
        username,
        email,
        nickname,
        bio,
        photo,
        id: v4()
      },
    });

    res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the profile' });
  }
});

// Route to update an existing profile
app.put('/profiles/:id', async (req, res) => {
  const profileId = req.params.id;
  const { name, email, bio, photo } = req.body;

  try {
    const updatedProfile = await prisma.profile.update({
      where: { id: profileId },
      data: {
        name,
        email,
        bio,
        photo,
      },
    });

    res.json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating the profile' });
  }
});

// Route to delete a profile
app.delete('/profiles/:id', async (req, res) => {
  const profileId = req.params.id;

  try {
    await prisma.profile.delete({
      where: { id: profileId },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting the profile' });
  }
});

// Route to fetch all profiles
app.get('/profiles', async (req, res) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
});

// Route to create a new post
app.post('/posts', async (req, res) => {
  const { profileId,title, url, description} = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        id: v4(),
        title,
        url,
        description,
        profileId,
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the post' });
  }
});

// Route to list posts of a specific profile
app.get('/profiles/:profileId/posts', async (req, res) => {
  const profileId = req.params.profileId;

  try {
    const posts = await prisma.post.findMany({
      where: {
        profileId: profileId,
      },
      include: {
        Highlight: true
      }
    });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching profile posts' });
  }
});

// Route to delete a specific post
app.delete('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting the post' });
  }
});

// Route to list highlights in a user's profile
app.get('/profiles/:profileId/highlights', async (req, res) => {
  const profileId = req.params.profileId;

  try {
    const highlights = await prisma.highlight.findMany({
      where: {
        profileId: profileId,
      },
    });

    res.json(highlights);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching profile highlights' });
  }
});

// Route to create a new highlights
app.post('/highlights', async (req, res) => {
    const { title, description,postId } = req.body;
    try {
        const profile = await prisma.post.findFirst({
            where:{
                id: postId
            },
            select: {
                profileId: true
            }

        })

      const newProfile = await prisma.highlight.create({
        data: {
            title,      
            description,
            profileId: profile.profileId,   
            id: v4(),
            postId
        },
      });
  
      res.status(201).json(newProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating the profile' });
    }
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

