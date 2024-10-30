# doSelectCursor

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `doSelectCursor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 08 00`
- **Assembly Address in Memory** : `0x892d058`

## Parameters

- `(undefined4)Var0` *(4 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 03 08 00 / 0c 22 05 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
doSelectCursor(0x5220c, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d058(int param_1,undefined4 param_2)

{
  bool bVar1;
  short sVar2;
  int iVar3;
  int *piVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  undefined4 uVar8;
  int iVar9;
  int iVar10;
  undefined4 local_20;
  int *local_1c;
  int local_18;
  short *local_14;
  undefined4 local_10;
  int *local_c;
  int local_8;
  short *local_4;
  
  iVar3 = Get_Execution_Pause_Phase(param_2);
  if (iVar3 == 0) {
    puVar5 = (undefined4 *)Pac_Get_Param(param_2,0,0,4);
    piVar4 = (int *)Pac_Get_Param(param_2,1,1,4);
    *(undefined4 *)(param_1 + 0x30) = *puVar5;
    *(int **)(param_1 + 0x240) = piVar4;
    iVar6 = *piVar4;
    iVar3 = 0;
    if ((iVar6 < 0) || (iVar3 = iVar6, iVar6 < *(int *)(*(int *)(param_1 + 0x10) + 0x798))) {
      iVar6 = *(int *)(param_1 + 0x30);
    }
    else {
      iVar6 = *(int *)(param_1 + 0x30);
      iVar3 = 0;
    }
    iVar9 = *(int *)(param_1 + 0x10);
    if (*(int *)(iVar9 + 0x798) == 0) {
      bVar1 = false;
    }
    else {
      piVar4 = (int *)(iVar9 + 0x7a4);
      FUN_0885da7c(*(undefined4 *)(iVar9 + 0x7a4),iVar9 + 0x7ac);
      FUN_0885d70c(*piVar4);
      iVar7 = *(int *)(iVar9 + 0x794);
      iVar10 = iVar7 + *(int *)(iVar9 + 0x798) * 0x30;
      if (iVar7 == iVar10) {
        iVar9 = *piVar4;
      }
      else {
        uVar8 = *(undefined4 *)(iVar9 + 0x7a4);
        while( true ) {
          FUN_0885d8ec(uVar8,*(undefined4 *)(iVar7 + 4),*(undefined4 *)(iVar7 + 8),iVar7,iVar7 + 0xc
                      );
          iVar7 = iVar7 + 0x30;
          if (iVar7 == iVar10) break;
          uVar8 = *(undefined4 *)(iVar9 + 0x7a4);
        }
        iVar9 = *piVar4;
      }
      *(undefined *)(iVar9 + 0x931) = 0;
      *(undefined *)(iVar9 + 0x932) = 0;
      *(undefined *)(iVar9 + 0x930) = 0;
      *(bool *)(iVar9 + 0x933) = iVar6 != 0;
      FUN_0885c4f4(iVar9,iVar3);
      bVar1 = true;
    }
    if (!bVar1) {
      FUN_0885c34c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x7a4));
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    FUN_0892d014(&local_10,*(undefined4 *)(param_1 + 0x10));
    *(undefined *)(local_8 + 0x8e8) = 0;
    if (local_8 == 0) {
      uVar8 = *(undefined4 *)(param_1 + 0x10);
    }
    else {
      *local_4 = *local_4 + -1;
      if (local_4 == (short *)0x0) {
        sVar2 = 0;
      }
      else {
        sVar2 = *local_4;
      }
      if (sVar2 == 0) {
        (**(code **)(*local_c + 0xc))(local_c,local_8,local_4,local_10);
        FUN_0892e358(local_8,local_10);
      }
      uVar8 = *(undefined4 *)(param_1 + 0x10);
    }
    FUN_0892d014(&local_20,uVar8);
    *(undefined *)(local_18 + 0x9c2) = 1;
    *(undefined *)(local_18 + 0x9c9) = 0;
    if (local_18 == 0) {
      iVar3 = *(int *)(param_1 + 0x10);
    }
    else {
      *local_14 = *local_14 + -1;
      if (local_14 == (short *)0x0) {
        sVar2 = 0;
      }
      else {
        sVar2 = *local_14;
      }
      if (sVar2 == 0) {
        (**(code **)(*local_1c + 0xc))(local_1c,local_18,local_14,local_20);
        FUN_0892e358(local_18,local_20);
      }
      iVar3 = *(int *)(param_1 + 0x10);
    }
    iVar3 = *(int *)(iVar3 + 0x7a4);
    if (_DAT_08aabdd4 == iVar3) {
      *(undefined *)(iVar3 + 0x931) = 0;
    }
    else {
      *(int *)(iVar3 + 0x9b4) = _DAT_08aabdd4;
      _DAT_08aabdd4 = iVar3;
      *(undefined *)(iVar3 + 0x931) = 0;
    }
    *(undefined *)(iVar3 + 0x932) = 0;
    *(undefined *)(iVar3 + 0x930) = 0;
    Pause_Execution(param_2,1);
    iVar3 = *(int *)(param_1 + 0x10);
  }
  else {
    iVar3 = *(int *)(param_1 + 0x10);
  }
  iVar6 = *(int *)(iVar3 + 0x7a4);
  if (*(char *)(iVar6 + 0x931) == '\0') {
    return;
  }
  if (*(char *)(iVar6 + 0x932) == '\0' || *(char *)(iVar6 + 0x931) == '\0') {
    if (*(char *)(iVar6 + 0x931) == '\0') {
      puVar5 = (undefined4 *)0x0;
    }
    else if (*(int *)(iVar6 + 0x8f0) < 0) {
      puVar5 = (undefined4 *)0x0;
    }
    else {
      puVar5 = (undefined4 *)(*(int *)(iVar3 + 0x794) + *(int *)(iVar6 + 0x8f0) * 0x30);
    }
    uVar8 = *puVar5;
  }
  else {
    uVar8 = *(undefined4 *)(param_1 + 0x30);
  }
  **(undefined4 **)(param_1 + 0x240) = *(undefined4 *)(iVar6 + 0x8f0);
  puVar5 = *(undefined4 **)(param_1 + 0x10);
  iVar3 = puVar5[0x1e9];
  if (*(int *)(iVar3 + 0x9b4) == 0) {
    bVar1 = _DAT_08aabdd4 == iVar3;
    if (bVar1) {
      bVar1 = *(char *)(iVar3 + 0x931) == '\0';
    }
    if (!bVar1) {
      iVar3 = puVar5[0x1e6];
      goto LAB_0892d3bc;
    }
    _DAT_08aabdd4 = 0;
  }
  else {
    _DAT_08aabdd4 = *(int *)(iVar3 + 0x9b4);
    *(undefined4 *)(iVar3 + 0x9b4) = 0;
  }
  iVar3 = puVar5[0x1e6];
LAB_0892d3bc:
  iVar6 = puVar5[0x1e5];
  if (iVar6 != iVar6 + iVar3 * 0x30) {
    do {
      iVar6 = iVar6 + 0x30;
    } while (iVar6 != puVar5[0x1e5] + iVar3 * 0x30);
  }
  puVar5[0x1e6] = 0;
  if (puVar5[0x1e9] != 0) {
    FUN_0885d70c(puVar5[0x1e9]);
  }
  Syscall::Kernel::Kernel_Memset(puVar5 + 1,0,0x300);
  *puVar5 = 0;
  FUN_0885c34c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x7a4));
  PAC::Cmd_Jump_Or_Call(param_2,uVar8,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

