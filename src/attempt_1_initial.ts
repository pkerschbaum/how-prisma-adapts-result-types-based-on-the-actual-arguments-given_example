export {};

type UserScalarFields = {
  id: number;
  email: string;
};

type OrgUnitScalarFields = {
  id: number;
  name: string;
};

type UserFindUniqueArgs = {
  where: { id: number };
  include?: { orgUnit?: boolean };
};

type UserGetPayload = UserScalarFields & { orgUnit?: OrgUnitScalarFields };

function findUnique(options: UserFindUniqueArgs): UserGetPayload {
  return {} as any;
}

const user = findUnique({
  where: { id: 1 },
});
user.id;
user.orgUnit;
user.orgUnit?.id;

const userWithOrgUnit = findUnique({
  where: { id: 1 },
  include: { orgUnit: true },
});
userWithOrgUnit.id;
userWithOrgUnit.orgUnit;
userWithOrgUnit.orgUnit?.id;

findUnique({
  where: { id: 1 },
  include: { orgUnit: true },
  foo: "bar",
});
