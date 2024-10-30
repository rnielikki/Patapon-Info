# setupUnit

Loads unit settings, e.g. character, equipment information, and skills. [applyUnit](./applyunit.md) after this is required to apply this setup.

## Code Information

- **Name**: `setupUnit`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 33 00`
- **Assembly Address in Memory** : `0x891cc84`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 33 00```

Which is interpreted as:

```c
setupUnit()
```

```c
0005AD2C  25120200:setMissionTimmingScript(2:2, 4:0, 1:5DD04)
  0005DD04  25000300:cmd_call(1:5DD3C)
    0005DD3C  25000300:cmd_call(1:1C4)
      000001C4  25000300:cmd_call(1:986C)
        0000986C  25000700:cmd_mov(8:67, 0.0)
        00009880  25161F00:addTroop(8:68, 8:67)
        00009894  25162000:setAppearancePosition(8:68, 0.0)
        000098A8  25162100:setRebornPosition(8:68, 0.0)
        000098BC  25000700:cmd_mov(8:73, 1.0)
        000098D0  25161F00:addTroop(8:74, 8:73)
        ...
        0000994C  25001700:cmd_ifEQ(8:18, 3.0, 1:999C) //gamemode check
        00009964  25001700:cmd_ifEQ(8:18, 4.0, 1:999C)
        0000997C  25001700:cmd_ifEQ(8:18, 5.0, 1:999C)
        00009994  25000300:cmd_call(1:5D84) //addSquad() and setPlayerId()
        0000999C  25163300:setupUnit()
        000099A0  25163100:applyUnit()
  ...
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891cc84(int param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  iVar1 = *(int *)(param_1 + 0x10);
  if (iVar1 == 0) {
    iVar1 = 0;
  }
  else {
    if (iVar1 == 0) {
      iVar1 = 0;
    }
    iVar1 = *(int *)(iVar1 + 0xf8);
    if (iVar1 == 0) {
      iVar1 = 0;
    }
  }
  if (iVar1 != 0) {
    iVar2 = Get_Some_Flag(1);
    iVar2 = *(int *)(iVar2 + 0x44);
    switch(*(undefined4 *)(iVar2 + 0x530)) {
    case 1:
    case 2:
    case 3:
    case 5:
      iVar1 = FUN_088a8650(iVar1,0);
      if (iVar1 != 0) {
        Mission::Init_Mission(iVar1);
      }
      break;
    case 4:
      iVar5 = 0;
      do {
        iVar3 = FUN_088a8650(iVar1,iVar5);
        if (iVar3 != 0) {
          Mission::Init_Mission(iVar3);
          iVar4 = *(int *)(iVar2 + 0x54c);
          if ((iVar4 == 4) || (iVar4 == 3)) {
            FUN_088dde2c(iVar3,1);
          }
        }
        iVar5 = iVar5 + 1;
      } while (iVar5 < 2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
