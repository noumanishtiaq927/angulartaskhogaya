const getendpoints = {
  email:
    'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users&fields=email',
  all: 'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users',
  OTHER:
    'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users&fields=email,(fieldname)',
};

const postpoint = {
  endpoint:
    'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users',
  body: `[
  {
      "firstName": "kara",
        "lastName": "zorel",
        "password": "karaZOR-EL-123$",
        "gender": "female",
        "dateOfJoining": "2021-10-19",
        "email": "kara@gmail.com",
        "designation": "juniorDeveloper",
        "department": "informationTechnology"
  }
]`,
};

const deleteendpoint = {
  endpoint:
    'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users',
  body: `["id"]`,
};

const singleendpoint = {
  end: 'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP/record?tableName=users&id=recf5PuJX6v2AxC4P',
};

const updatere = {
  body: `
        [
  {
    "id": "rec2CO7nLufSs5pKx",
    "fields": {
      "title": "New Example 2",
      "website": "https://example2.com"
    }
  }
]
    `,
  end: 'https://v1.nocodeapi.com/noumanishtiaq53/airtable/jYqcnmgfjJmkOYyP?tableName=users',
};
