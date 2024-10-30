# sendVersus04PanelSwapRandom

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus04PanelSwapRandom`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 fd 00`
- **Assembly Address in Memory** : `0x89250b0`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089250b0(int param_1,undefined4 param_2)

{
  char cVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  uint uVar5;
  uint uVar6;
  uint uVar7;
  int iVar8;
  undefined local_18;
  undefined local_17;
  undefined2 local_16;
  undefined2 local_14;
  undefined2 local_12;
  char local_10;
  undefined local_f;
  undefined local_e;
  undefined local_d;
  undefined local_c;
  undefined local_b;
  undefined local_a;
  undefined local_9;
  char local_8 [4];
  undefined local_4;
  undefined local_3;
  undefined local_2;
  undefined local_1;
  
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  local_18 = 0x10;
  local_17 = 0;
  local_16 = 0;
  local_14 = 0;
  local_12 = 0x10ce;
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (((iVar3 != 0) && (iVar3 = *(int *)(iVar3 + 0x68), iVar3 != 0)) &&
     (*(char *)(iVar3 + 0xa8) == '\0')) {
    local_8[0] = -1;
    local_8[1] = 0xff;
    local_8[2] = 0xff;
    local_8[3] = 0xff;
    local_4 = 0xff;
    local_3 = 0xff;
    local_2 = 0xff;
    local_1 = 0xff;
    iVar8 = 0;
    do {
      iVar4 = zero_if_08aabe38_is_zero(1);
      uVar5 = Util::Random::Get_Rand_Value(iVar4 + 0x9c8);
      iVar4 = 0;
      uVar7 = uVar5 % 9;
LAB_0892517c:
      uVar6 = uVar7 & 7;
      if ((int)uVar7 < 0) {
        if (uVar6 != 0) {
          uVar6 = uVar6 - 8;
          goto LAB_08925190;
        }
      }
      else {
LAB_08925190:
        uVar6 = uVar6 & 0xff;
      }
      if (local_8[uVar6] != -1) {
        iVar4 = iVar4 + 1;
        if (7 < iVar4) goto LAB_089251cc;
        uVar7 = uVar5 % 9 + iVar4;
        goto LAB_0892517c;
      }
      if (iVar8 == *piVar2) {
        cVar1 = '\b';
      }
      else {
        cVar1 = (char)iVar8;
      }
      local_8[uVar6] = cVar1;
LAB_089251cc:
      iVar8 = iVar8 + 1;
    } while (iVar8 < 8);
    local_f = local_8[1];
    local_e = local_8[2];
    local_10 = local_8[0];
    local_c = local_4;
    local_b = local_3;
    local_d = local_8[3];
    local_a = local_2;
    local_9 = local_1;
    FUN_089f00a4(iVar3,&local_18);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

