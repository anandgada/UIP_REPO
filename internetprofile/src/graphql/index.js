import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const CREATE_PERSONAL_DETAILS = gql`
  mutation createPersonalUserDeatials(
    $firstName: String!
    $lastName: String!
    $dob: Date!
    $phone_number: String!
    $gender: ENUM_USERPERSONALDETAIL_GENDER!
    $location: String!
    $userId: ID!
  ) {
    createUserPersonalDetail(
      data: {
        firstName: $firstName
        lastName: $lastName
        date_of_birth: $dob
        phone_number: $phone_number
        gender: $gender
        location: $location
        user: $userId
      }
    ) {
      data {
        id
        attributes {
          firstName
          createdAt
        }
      }
    }
  }
`;

export const GET_USER_ALL_DATA = gql`
  query getUser($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
          providers {
            provider
            value
          }
          deatils {
            data {
              attributes {
                firstName
                lastName
                date_of_birth
                phone_number
                gender
                location
              }
            }
          }
          education {
            data {
              attributes {
                educations {
                  title
                  grade
                  college
                  year_of_pass
                }
              }
            }
          }
          skill {
            data {
              attributes {
                skills
                projects {
                  title
                  duration
                  description
                  role
                }
              }
            }
          }
          experience {
            data {
              attributes {
                experience {
                  title
                  description
                  From
                  To
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_EDUCATION = gql`
  mutation createUserEducation(
    $data: [ComponentEducationEducationComponentInput]!
    $userId: ID!
  ) {
    createUserEducationDetail(data: { educations: $data, user: $userId }) {
      data {
        id
      }
    }
  }
`;

export const CREATE_SKILLS = gql`
  mutation createUserSkillsandProjects(
    $userId: ID!
    $skills: String!
    $projects: [ComponentProjectProjectInput]!
  ) {
    createUserSkillsandProject(
      data: { user: $userId, projects: $projects, skills: $skills }
    ) {
      data {
        id
      }
    }
  }
`;

export const CREATE_EXPERINCE = gql`
  mutation createUserExpereince(
    $userId: ID!
    $expe: [ComponentWorkWorkInput]!
  ) {
    createUsersExperience(data: { experience: $expe, user: $userId }) {
      data {
        id
      }
    }
  }
`;

export const UPDATE_PROFILES = gql`
  mutation UpdateUserProfiles(
    $userId: ID!
    $providers: [ComponentGithubConnectionInput]!
  ) {
    updateUsersPermissionsUser(id: $userId, data: { providers: $providers }) {
      data {
        id
      }
    }
  }
`;

export const UPDATE_USER_PROVIDERS = gql`
  mutation updateProviders(
    $userId: ID!
    $providers: [ComponentGithubConnectionInput]!
  ) {
    updateUsersPermissionsUser(id: $userId, data: { providers: $providers }) {
      data {
        id
      }
    }
  }
`;
