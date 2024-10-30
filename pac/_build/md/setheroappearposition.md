# setHeroAppearPosition

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setHeroAppearPosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 09 01`
- **Assembly Address in Memory** : `0x89287ec`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 09 01 / 04 00 00 00 / 0d 00 00 00 / 20 00 00 00 / 0c 00 00 00```

Which is interpreted as:

```c
setHeroAppearPosition((int *)iVar13, (float *)fVar12)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089287ec(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    iVar4 = *(int *)(iVar3 + 0x704);
    if ((iVar4 != 0) && (iVar4 + 0x170 != 0)) {
      iVar5 = *(int *)(iVar3 + 0x184) * 0x10 + iVar4 + 0x170;
      *(undefined4 *)(iVar5 + 0x20) = *puVar2;
      *(undefined4 *)(iVar5 + 0x24) = 0;
      *(undefined4 *)(iVar5 + 0x28) = 0;
      *(undefined4 *)(iVar5 + 0x2c) = 0;
      if (iVar3 != -0x1f0) {
        uVar8 = *(undefined4 *)(iVar5 + 0x24);
        uVar9 = *(undefined4 *)(iVar5 + 0x28);
        uVar7 = *(undefined4 *)(iVar5 + 0x2c);
        *(undefined4 *)(iVar3 + 0x2f0) = *(undefined4 *)(iVar5 + 0x20);
        *(undefined4 *)(iVar3 + 0x2f4) = uVar8;
        *(undefined4 *)(iVar3 + 0x2f8) = uVar9;
        *(undefined4 *)(iVar3 + 0x2fc) = uVar7;
        syscall::vadd_q(&local_10,iVar3 + 0x2f0,iVar3 + 0x300);
        *(undefined4 *)(iVar3 + 0x2e0) = local_10;
        *(undefined4 *)(iVar3 + 0x2e4) = local_c;
        *(undefined4 *)(iVar3 + 0x2e8) = local_8;
        *(undefined4 *)(iVar3 + 0x2ec) = local_4;
        FUN_0890c838((undefined4 *)(iVar3 + 0x2e0),0);
        iVar5 = Is_HeroUnit(iVar3);
        if ((iVar5 != 0) && (iVar5 != -0x170)) {
          iVar6 = iVar5 + 0x810;
          FUN_08955da8(iVar6,iVar4 + 0x2b0);
          FUN_08955e28(iVar6,iVar3 + 0x2e0);
          FUN_08955db8(iVar6,iVar3 + 0x2e0);
          iVar3 = *(int *)(iVar5 + 200);
          if (iVar3 != 0) {
            puVar1 = (undefined4 *)offset__10(iVar6);
            *(undefined4 *)(iVar3 + 0xc0) = *puVar1;
            *(undefined4 *)(iVar3 + 0xc4) = puVar1[1];
            *(undefined4 *)(iVar3 + 200) = puVar1[2];
            *(undefined4 *)(iVar3 + 0xcc) = puVar1[3];
            puVar1 = (undefined4 *)offset__10(iVar6);
            *(undefined4 *)(iVar3 + 0x30) = *puVar1;
            *(undefined4 *)(iVar3 + 0x34) = puVar1[1];
            *(undefined4 *)(iVar3 + 0x38) = puVar1[2];
            *(undefined4 *)(iVar3 + 0x3c) = puVar1[3];
          }
        }
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

