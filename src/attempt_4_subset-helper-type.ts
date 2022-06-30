export {};

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 */
type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

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

type UserGetPayload<ActualFindUniqueArgs extends UserFindUniqueArgs> =
  UserScalarFields &
    (ActualFindUniqueArgs["include"] extends { orgUnit: true }
      ? { orgUnit: OrgUnitScalarFields }
      : {});

function findOne<ActualFindUniqueArgs extends UserFindUniqueArgs>(
  options: Subset<ActualFindUniqueArgs, UserFindUniqueArgs>
): UserGetPayload<ActualFindUniqueArgs> {
  return {} as any;
}

const user = findOne({
  where: { id: 1 },
});
user.id;
user.orgUnit;
user.orgUnit.id;

const userWithOrgUnit = findOne({
  where: { id: 1 },
  include: { orgUnit: true },
});
userWithOrgUnit.id;
userWithOrgUnit.orgUnit;
userWithOrgUnit.orgUnit.id;

findOne({
  where: { id: 1 },
  include: { orgUnit: true },
  foo: "bar",
});
