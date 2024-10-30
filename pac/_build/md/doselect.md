# doSelect

This comes **end of the debug menu**, following the [setChoice](./setchoice.md)s.

## Code Information

- **Name**: `doSelect`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 02 00`
- **Assembly Address in Memory** : `0x892cb68`

## Parameters

- `(Address)close_callback` *(4 bytes)* : Address to call when the debug is being closed. Usually expected to **redirect to [cmd_end](./cmd_end.md) only**.
- `(int)iVar0` *(4 bytes)* : Expected to be 1.

## Example

Here is one example in hex:

```25 03 02 00 / dc d7 02 00 / 01 00 00 00```

Which is interpreted as:

```c
doSelect(0x2d7dc, 0x1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892cb68(int param_1,undefined4 param_2)

{
  bool bVar1;
  short sVar2;
  int iVar3;
  int *piVar4;
  int *piVar5;
  undefined4 *puVar6;
  int iVar7;
  undefined4 *puVar8;
  int iVar9;
  undefined4 uVar10;
  int iVar11;
  int iVar12;
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
    piVar4 = (int *)Pac_Get_Param(param_2,0,0,4);
    piVar5 = (int *)Pac_Get_Param(param_2,1,0,4);
    iVar7 = *piVar4;
    *(int *)(param_1 + 0x30) = iVar7;
    iVar3 = *piVar5;
    iVar11 = *(int *)(param_1 + 0x10);
    if (*(int *)(iVar11 + 0x798) == 0) {
      bVar1 = false;
    }
    else {
      piVar4 = (int *)(iVar11 + 0x7a4);
      FUN_0885da7c(*(undefined4 *)(iVar11 + 0x7a4),iVar11 + 0x7ac);
      FUN_0885d70c(*piVar4);
      iVar9 = *(int *)(iVar11 + 0x794);
      iVar12 = iVar9 + *(int *)(iVar11 + 0x798) * 0x30;
      if (iVar9 == iVar12) {
        iVar11 = *piVar4;
      }
      else {
        uVar10 = *(undefined4 *)(iVar11 + 0x7a4);
        while( true ) {
          FUN_0885d8ec(uVar10,*(undefined4 *)(iVar9 + 4),*(undefined4 *)(iVar9 + 8),iVar9,
                       iVar9 + 0xc);
          iVar9 = iVar9 + 0x30;
          if (iVar9 == iVar12) break;
          uVar10 = *(undefined4 *)(iVar11 + 0x7a4);
        }
        iVar11 = *piVar4;
      }
      *(undefined *)(iVar11 + 0x931) = 0;
      *(undefined *)(iVar11 + 0x932) = 0;
      *(undefined *)(iVar11 + 0x930) = 0;
      *(bool *)(iVar11 + 0x933) = iVar7 != 0;
      FUN_0885c4f4(iVar11,-(uint)(iVar3 == 0));
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
      uVar10 = *(undefined4 *)(param_1 + 0x10);
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
      uVar10 = *(undefined4 *)(param_1 + 0x10);
    }
    FUN_0892d014(&local_20,uVar10);
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
    puVar8 = *(undefined4 **)(param_1 + 0x10);
  }
  else {
    puVar8 = *(undefined4 **)(param_1 + 0x10);
  }
  iVar3 = puVar8[0x1e9];
  if (*(char *)(iVar3 + 0x931) == '\0') {
    return;
  }
  if (*(char *)(iVar3 + 0x932) == '\0' || *(char *)(iVar3 + 0x931) == '\0') {
    if (*(char *)(iVar3 + 0x931) == '\0') {
      puVar6 = (undefined4 *)0x0;
    }
    else if (*(int *)(iVar3 + 0x8f0) < 0) {
      puVar6 = (undefined4 *)0x0;
    }
    else {
      puVar6 = (undefined4 *)(puVar8[0x1e5] + *(int *)(iVar3 + 0x8f0) * 0x30);
    }
    uVar10 = *puVar6;
  }
  else {
    uVar10 = *(undefined4 *)(param_1 + 0x30);
  }
  iVar3 = puVar8[0x1e9];
  if (*(int *)(iVar3 + 0x9b4) == 0) {
    bVar1 = _DAT_08aabdd4 == iVar3;
    if (bVar1) {
      bVar1 = *(char *)(iVar3 + 0x931) == '\0';
    }
    if (!bVar1) {
      iVar3 = puVar8[0x1e6];
      goto LAB_0892cea0;
    }
    _DAT_08aabdd4 = 0;
  }
  else {
    _DAT_08aabdd4 = *(int *)(iVar3 + 0x9b4);
    *(undefined4 *)(iVar3 + 0x9b4) = 0;
  }
  iVar3 = puVar8[0x1e6];
LAB_0892cea0:
  iVar7 = puVar8[0x1e5];
  if (iVar7 != iVar7 + iVar3 * 0x30) {
    do {
      iVar7 = iVar7 + 0x30;
    } while (iVar7 != puVar8[0x1e5] + iVar3 * 0x30);
  }
  puVar8[0x1e6] = 0;
  if (puVar8[0x1e9] != 0) {
    FUN_0885d70c(puVar8[0x1e9]);
  }
  Syscall::Kernel::Kernel_Memset(puVar8 + 1,0,0x300);
  *puVar8 = 0;
  FUN_0885c34c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x7a4));
  PAC::Cmd_Jump_Or_Call(param_2,uVar10,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

