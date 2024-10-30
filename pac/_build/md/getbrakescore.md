# getBrakeScore

Gets what is the VS scoring when the target squad or gimmick is killed.

## Code Information

- **Name**: `getBrakeScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 09 00`
- **Assembly Address in Memory** : `0x8911378`

## Parameters

- `(int *)handle` *(8 bytes)* : The target handle. Can be squad or gimmick.
- `(int *)point` *(8 bytes)* : Variable to *store* the reward point.
- `(int *)break_type` *(8 bytes)* : Expected 0~6. More information in [setBrakeScore](./setbrakescore.md). **Does nothing with fort occupation**.

## Example

Here is one example in hex:

```25 17 09 00 / 08 00 00 00 / 7f 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getBrakeScore(((global)int *)giVar127, (int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911378(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  *piVar2 = 0;
  *piVar3 = 0;
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  if (iVar4 != 0) {
    *piVar2 = (int)*(short *)(iVar4 + 0x86);
    *piVar3 = (int)*(short *)(iVar4 + 0x88);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

