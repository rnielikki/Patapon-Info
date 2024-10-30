# checkTipsUnlock

Check if a tip is unlocked.

## Code Information

- **Name**: `checkTipsUnlock`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 29 00`
- **Assembly Address in Memory** : `0x894baf0`

## Parameters

- `(uint)tip_id` *(>= 4 bytes)* : [ID of the tip](./guide/reference-table.md#tips-id) to check if it is unlocked. Saved in `cmd_res` value, use with e.g. [cmd_resJmp](./cmd_resjmp.md)

## Example

Here is one example in hex:

```25 0a 29 00 / 01 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
checkTipsUnlock((int)0)
```

This jumps to `0x707c` if the tip is unlocked.

```c
00002B08  250A2900:checkTipsUnlock(15)
00002B14  25000500:cmd_resJmp(2:1, 1:707C)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894baf0(undefined4 param_1,undefined4 param_2)

{
  bool bVar1;
  int *piVar2;
  int iVar3;
  uint *puVar4;
  int iVar5;
  uint uVar6;
  int iVar7;
  int iVar8;
  
  FUN_0883c04c(param_2,0);
  piVar2 = (int *)Pac_Get_Param(param_2,0,0,1);
  iVar3 = Save::Get_Save_BaseAddr(1);
  iVar3 = *(int *)(iVar3 + 0x50);
  iVar5 = *piVar2;
  iVar8 = 0;
  iVar7 = 0;
  if (0 < iVar5) {
    do {
      puVar4 = (uint *)Pac_Get_Param(param_2,1,0,4);
      uVar6 = *puVar4;
      if ((int)uVar6 < 0) {
        iVar5 = *piVar2;
      }
      else {
        if (uVar6 >> 5 < 4) {
          bVar1 = (1 << (uVar6 & 0x1f) & *(uint *)(iVar3 + 0x2b808 + (uVar6 >> 5) * 4)) >>
                  (uVar6 & 0x1f) != 0;
        }
        else {
          bVar1 = false;
        }
        if (bVar1) {
          iVar8 = iVar8 + 1;
        }
        iVar5 = *piVar2;
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < iVar5);
  }
  FUN_0883c04c(param_2,iVar8 == iVar5);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

