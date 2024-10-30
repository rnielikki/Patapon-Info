# checkUnkoName

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkUnkoName`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 16 00`
- **Assembly Address in Memory** : `0x894a96c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(String)Var1`

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a96c(undefined4 param_1,undefined4 param_2)

{
  undefined uVar1;
  bool bVar2;
  undefined4 *puVar3;
  short *psVar4;
  int iVar5;
  undefined *puVar6;
  undefined1 *puVar7;
  short *psVar8;
  uint uVar9;
  undefined4 uVar10;
  short local_a0 [16];
  undefined local_80 [128];
  
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar7 = &DAT_08a714d8;
  puVar6 = local_80;
  iVar5 = 0x40;
  do {
    uVar1 = puVar7[1];
    iVar5 = iVar5 + -1;
    *puVar6 = *puVar7;
    puVar6[1] = uVar1;
    puVar7 = puVar7 + 2;
    puVar6 = puVar6 + 2;
  } while (0 < iVar5);
  Pac_Get_StringParam(param_2,local_80);
  *puVar3 = 0;
  Syscall::Kernel::Kernel_Memset(local_a0,0,0x20);
  Message::Write_Value_Final(local_a0,0x20,local_80);
  iVar5 = Save::Get_Save_BaseAddr(1);
  psVar4 = (short *)Message::GetMagicWord(*(int *)(iVar5 + 0x50) + 0x2b408,0xc);
  uVar10 = 1;
  if (*psVar4 == 0) {
    uVar10 = 0;
  }
  else {
    iVar5 = 0;
    do {
      if (*psVar4 == 0) break;
      bVar2 = false;
      uVar9 = 0;
      psVar8 = local_a0;
      do {
        if (*psVar8 == 0) break;
        if (*psVar4 == *psVar8) {
          bVar2 = true;
          break;
        }
        uVar9 = uVar9 + 1;
        psVar8 = psVar8 + 1;
      } while (uVar9 < 0x10);
      if (!bVar2) {
        uVar10 = 0;
        break;
      }
      iVar5 = iVar5 + 1;
      psVar4 = psVar4 + 1;
    } while (iVar5 < 0x10);
  }
  *puVar3 = uVar10;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

