# multi_waitTimeSync

Called right before the mission (and right before the countdown), waiting until every player is ready. **Calld with pons too**.

## Code Information

- **Name**: `multi_waitTimeSync`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b0 00`
- **Assembly Address in Memory** : `0x891adec`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 b0 00```

Which is interpreted as:

```c
multi_waitTimeSync()
```

This is another example to start the mission.

```c
000114D4  2516B000:multi_waitTimeSync()
000114D8  2516B600:multi_battleGoAHead()
000114DC  250C1E00:start(2:0)
000114E8  250C0700:setDisableKey(2:0, 2:1)
000114FC  25000F00:cmd_waitFrame(2:1)
00011508  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891adec(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  uVar1 = *(undefined4 *)(iVar2 + 100);
  iVar2 = Is_Multi(uVar1);
  if (iVar2 != 0) {
    iVar2 = *(int *)(param_1 + 0x10);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (*(int *)(iVar2 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = Get_Execution_Pause_Phase(param_2);
  if (iVar2 == 0) {
    iVar2 = Is_Multi(uVar1);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    Pause_Execution(param_2,1);
    iVar2 = FUN_089870b4(uVar1);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = FUN_08987188(uVar1);
  if (iVar2 != 0) {
    FUN_08987144(uVar1);
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

