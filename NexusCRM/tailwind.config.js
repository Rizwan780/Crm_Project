/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     'client/templates/client/*.{html,js}',
     'core/templates/core/*.{html,js}',
     'core/templates/core/partials/*.{html,js}',
     'dashboard/templates/dashboard/*.{html,js}',
     'lead/templates/lead/*.{html,js}',
     'team/templates/team/*.{html,js}',
     'userprofile/templates/userprofile/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

