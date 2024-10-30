# flipEnable

Changes direction of the unit.

For player, works only cutscene with [player model index](./changemodel.md) 1. For bosses, it works.

## Code Information

- **Name**: `flipEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0e 00`
- **Assembly Address in Memory** : `0x8911a60`

## Parameters

- `(int *)handle` *(8 bytes)* : [Handle](./guide/how-to-get-a-handle.md) of the target.
- `(bool)is_flip` *(8 bytes)* : 0 is normal direction (unit sees right), 1 the unit sees left.

## Example

Here is one example in hex:

```25 17 0e 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
flipEnable((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911a60(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 200);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    if (*piVar2 == 0) {
      uVar4 = 0x3f800000;
    }
    else {
      uVar4 = 0xbf800000;
    }
    *(undefined4 *)(iVar3 + 0x94) = uVar4;
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    (**(code **)(*(int *)(iVar3 + 4) + 0x3c))(iVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

