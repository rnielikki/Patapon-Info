# getGateInfo

Gets detail gate information given by [setGateInfo](./setgateinfo.md).

## Code Information

- **Name**: `getGateInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 be 00`
- **Assembly Address in Memory** : `0x8923ce0`

## Parameters


- `(bool)bind_type` *(8 bytes)* : 0 has many types of binds, 1 will be connected to only `param_index` 2
- `(int)bind_identifier` *(8 bytes)* : `bind_identifier` from [setupAddDungeonWall](./setupadddungeonwall.md).
- `(int)param_index` *(8 bytes)* : Index of the parameter, see below for the detail.
- `(int *)destination` *(8 bytes)* : *Variable to store* the result. The result depends on `param_index`, see below.

For detail of each parameter, see [setGateInfo](./setgateinfo.md).

## Example

Here is one example in hex:

```25 16 be 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 47 00 00 00 / 02 00 00 00 / 06 00 00 00 / 04 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
getGateInfo((int)0, ((global)int *)giVar71, (int)6, (int *)iVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923ce0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 uVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar6 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x118);
  if (*piVar1 == 0) {
    iVar5 = FUN_088b25fc(uVar6,*puVar2);
  }
  else {
    iVar5 = FUN_088b2648(uVar6,*puVar2);
  }
  if (iVar5 != 0) {
    *puVar4 = *(undefined4 *)(iVar5 + *piVar3 * 4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
