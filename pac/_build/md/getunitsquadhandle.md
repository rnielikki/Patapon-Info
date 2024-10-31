# getUnitSquadHandle

Gets handle by the [unique ID of the reqactor](./setreqactoruniqueid.md). **Might not work well gimmick reqActor**.

## Code Information

- **Name**: `getUnitSquadHandle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 37 00`
- **Assembly Address in Memory** : `0x891d040`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the squad handle.
- `(int)reqactor_id` *(8 bytes)* : [Unique ID of the reqactor](./setreqactoruniqueid.md).

## Example

Here is one example in hex:

```25 16 37 00 / 08 00 00 00 / a8 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitSquadHandle(((global)int *)giVar168, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d040(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = -1;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if ((iVar3 != 0) && (iVar3 = Get_Squad_From_ReqUniqueID(iVar3,*puVar2), iVar3 != 0)) {
    *piVar1 = (int)*(short *)(iVar3 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

