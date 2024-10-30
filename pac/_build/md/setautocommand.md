# setAutoCommand

Sends command automatically, possibly for multiple times. Unlike [sendCommand](./sendcommand.md), this involves drumming, and activates heromode.

This **disables drum input**, but debug mode still can be opened.

Does not work properly with miracle (Don dodon dodon) input.

## Code Information

- **Name**: `setAutoCommand`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 0d 00`
- **Assembly Address in Memory** : `0x8970914`

## Parameters

- `(int)command_id` *(8 bytes)* : [Command Id](./guide/reference-table.md#command-ids) to perform.
- `(int)repeat_times` *(8 bytes)* : **Amount to perform-1**. Set 0 to perform only once. -1 performs for infinite amount.

## Example

Here is one example in hex:

```25 0c 0d 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
setAutoCommand((int)0, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970914(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  float fVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar5 != 0) {
    func_0x08b74618(iVar5 + 8);
    iVar3 = func_0x08b72c48(iVar5 + 500,*puVar1);
    if (iVar3 != 0) {
      fVar7 = 0.0;
      iVar6 = 0;
      do {
        iVar4 = (int)*(char *)(iVar3 + iVar6 + 0x38);
        if (0 < iVar4) {
          func_0x08b74690(fVar7,iVar5 + 8,iVar4,0);
        }
        iVar6 = iVar6 + 1;
        fVar7 = fVar7 + 0.5;
      } while (iVar6 < 8);
      func_0x08b746d8(iVar5 + 8,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

