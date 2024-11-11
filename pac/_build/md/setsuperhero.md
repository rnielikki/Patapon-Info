# setSuperHero

Apply hero squad action to an unit. This does not change model, and **does not affect to actual heromode**.

This affects unit size and camera zooming during heromode.

## Code Information

- **Name**: `setSuperHero`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 2f 00`
- **Assembly Address in Memory** : `0x891ca1c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)as_hero` *(8 bytes)* : 0 does not apply hero action, 1 does.

## Example

Here is one example in hex:

```25 16 2f 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setSuperHero((int *)iVar54, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ca1c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) &&
     (iVar4 = *piVar2, FUN_088b9df8(iVar3,iVar4 != 0), iVar4 != 0)) {
    iVar4 = Save::Get_Save_BaseAddr(1);
    iVar4 = return__0x1c(*(undefined4 *)(iVar4 + 0x50));
    FUN_088b9eb8(iVar3,iVar4 + 0xed80);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

