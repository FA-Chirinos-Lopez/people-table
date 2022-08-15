// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({

    "data": [

      {

        "name": "Han Solo",

        "email": "han@shot.first"

      },

      {

        "name": "Robocop",

        "email": "robocop@omnicorp.com"

      },

      {

        "name": "Danny Devito",

        "email": "devito@paddys.com"

      },

      {

        "name": "Arya Stark",

        "email": "faceless@man"

      },

      {

        "name": "John McClane",

        "email": "mcclane@nakatomi.plaza"

      },

      {

        "name": "Indiana Jones",

        "email": "indiana@explorers.org"

      },

      {

        "name": "Alex Etel",

        "email": "alex@builtbypixel.com"

      }

    ]

  })
}
