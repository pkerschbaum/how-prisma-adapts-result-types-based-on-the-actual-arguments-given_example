export {};

type UserScalarFields = {
  id: number;
  username: string;
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

function findOne(options: UserFindUniqueArgs): UserGetPayload {
  return {} as any;
}

const user = findOne({
  where: { id: 1 },
});
user.id;
user.orgUnit;
user.orgUnit?.id;

const userWithOrgUnit = findOne({
  where: { id: 1 },
  include: { orgUnit: true },
});
userWithOrgUnit.id;
userWithOrgUnit.orgUnit;
userWithOrgUnit.orgUnit?.id;

findOne({
  where: { id: 1 },
  include: { orgUnit: true },
  foo: "bar",
});
