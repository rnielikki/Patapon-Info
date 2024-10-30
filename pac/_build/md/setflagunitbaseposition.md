# setFlagUnitBasePosition

Forces base position of the Hatapon.

## Code Information

- **Name**: `setFlagUnitBasePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 43 00`
- **Assembly Address in Memory** : `0x891ded8`

## Parameters

- `(float)pos_x` *(8 bytes)* : X position to move Hatapon.
- `(float)pos_y` *(8 bytes)* : Y position to move Hatapon.

## Example

Here is one example in hex:

```25 16 43 00 / 10 00 00 00 / 00 00 96 c3 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setFlagUnitBasePosition((float)-300, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891ded8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  undefined *puVar5;
  int iVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
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
  if (((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,0), iVar3 != 0)) &&
     (iVar4 = Get_HataponAddr(iVar3), iVar4 != 0)) {
    iVar6 = *(int *)(iVar4 + 200);
    if (iVar6 == 0) {
      iVar4 = *(int *)(iVar4 + 0xa14);
    }
    else {
      uVar9 = *puVar2;
      uVar8 = *(undefined4 *)(iVar6 + 200);
      uVar7 = *puVar1;
      *(undefined4 *)(iVar6 + 0xc0) = uVar7;
      *(undefined4 *)(iVar6 + 0xc4) = uVar9;
      *(undefined4 *)(iVar6 + 200) = uVar8;
      *(undefined4 *)(iVar6 + 0xcc) = *(undefined4 *)(iVar6 + 0xcc);
      FUN_0887f1e4(*(undefined4 *)(iVar6 + 0x1e0));
      puVar5 = *(undefined **)(iVar6 + 0x1ec);
      if (puVar5 != (undefined *)0x0) {
        local_c = uVar7;
        local_8 = uVar9;
        local_4 = uVar8;
        FUN_08983b94(puVar5,&local_c);
        *puVar5 = 0;
      }
      iVar4 = *(int *)(iVar4 + 0xa14);
    }
    iVar3 = iVar3 + 0x170 + *(int *)(iVar4 + 0x184) * 0x10;
    *(undefined4 *)(iVar3 + 0x20) = *puVar1;
    *(undefined4 *)(iVar3 + 0x24) = *(undefined4 *)(iVar3 + 0x24);
    *(undefined4 *)(iVar3 + 0x28) = *(undefined4 *)(iVar3 + 0x28);
    *(undefined4 *)(iVar3 + 0x2c) = *(undefined4 *)(iVar3 + 0x2c);
    FUN_08955e28(iVar4 + 0x260,iVar3 + 0x20);
    FUN_08955c90(iVar4 + 0x260,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

